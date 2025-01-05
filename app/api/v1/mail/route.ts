import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const error = NextResponse.json(
  { error: "Internal Server Error" },
  { status: 500 }
);

export async function POST(req: Request) {
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.error("AWS credentials not found");
    return error;
  }

  try {
    const client = new SESClient({
      region: "ap-southeast-2",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    if (!req.body) {
      console.error("No body found");
      return error;
    }

    const body = await req.json();
    const { name, email, message } = body;

    const input = {
      // SendEmailRequest
      Source: "jamie@veryserious.io",
      Destination: {
        // Destination
        ToAddresses: [
          // AddressList
          "jamie@veryserious.io",
        ],
      },
      Message: {
        // Message
        Subject: {
          // Content
          Data: `New submission from contact form from ${name} - ${email}`, // required
          Charset: "UTF-8",
        },
        Body: {
          // Body
          Text: {
            Data: message, // required
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: ["jamesrobertbreen@gmail.com"],
      SourceArn:
        "arn:aws:ses:ap-southeast-2:111431205883:identity/jamie@veryserious.io",
    };
    const command = new SendEmailCommand(input);
    const response = await client.send(command);
    if (!response.MessageId || response["$metadata"].httpStatusCode !== 200) {
      console.error("Email not sent");
      return error;
    }
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return error;
  }
}
