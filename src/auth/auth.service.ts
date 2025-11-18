import { Injectable } from "@nestjs/common";
import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";
const scryptAsync = promisify(scrypt);

@Injectable()
export class AuthService {
  async hashPassword(password: string): Promise<{
    hashedPassword: string;
    salt: string;
  }> {
    const salt = randomBytes(16).toString("hex");
    const hash = await scryptAsync(password, salt, 16);
    return {
      hashedPassword: (hash as Buffer).toString("hex"),
      salt,
    };
  }
}
