import { randomUUID } from "node:crypto";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class UserProfile {
  @PrimaryKey({ type: "uuid" })
  uuid: string = randomUUID();

  @Property()
  login: string;

  @Property()
  password: string;

  @Property()
  salt: string;
}
