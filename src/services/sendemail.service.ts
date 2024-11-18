import nodemailer from 'nodemailer';
import config from '../core/config';
import logger from '../core/logger';
import prisma from '../client';
import { Message, Prisma } from '@prisma/client';

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() =>
      logger.warn(
        'Unable to connect to email server. Make sure you have configured the SMTP options in .env'
      )
    );
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to: string, subject: string, text: string): Promise<any> => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

/**
 * Send an email
 * @param {Message} messageObject
 * @returns {Promise<Prisma.MessageCreateInput>} Message
 */
const createMessage = async (messageObject: Prisma.MessageCreateInput): Promise<Message> => {
  return prisma.message.create({
    data: messageObject,
  });
};

export default {
  transport,
  sendEmail,
  createMessage,
};