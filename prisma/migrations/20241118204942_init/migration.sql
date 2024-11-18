-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "recipient_email" TEXT NOT NULL,
    "sender_email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "subject" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_recipient_email_key" ON "Message"("recipient_email");
