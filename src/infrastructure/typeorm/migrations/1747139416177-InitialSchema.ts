import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1747139416177 implements MigrationInterface {
  name = 'InitialSchema1747139416177';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."fighters_weightclass_enum" AS ENUM('FLYWEIGHT', 'BANTAMWEIGHT', 'FEATHERWEIGHT', 'LIGHTWEIGHT', 'WELTERWEIGHT', 'MIDDLEWEIGHT', 'LIGHT_HEAVYWEIGHT', 'HEAVYWEIGHT')`,
    );
    await queryRunner.query(
      `CREATE TABLE "fighters" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "nickname" character varying, "birthDate" date NOT NULL, "country" character varying NOT NULL, "weightClass" "public"."fighters_weightclass_enum" NOT NULL, "heightCm" integer, "reachCm" integer, "gym" character varying, CONSTRAINT "PK_181eba8698d5defe223daa78fba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."rankings_weightclass_enum" AS ENUM('FLYWEIGHT', 'BANTAMWEIGHT', 'FEATHERWEIGHT', 'LIGHTWEIGHT', 'WELTERWEIGHT', 'MIDDLEWEIGHT', 'LIGHT_HEAVYWEIGHT', 'HEAVYWEIGHT')`,
    );
    await queryRunner.query(
      `CREATE TABLE "rankings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "weightClass" "public"."rankings_weightclass_enum" NOT NULL, "points" integer NOT NULL, "wins" integer NOT NULL, "losses" integer NOT NULL, "draws" integer NOT NULL, "winPercentage" double precision NOT NULL, "lastFightDate" date NOT NULL, "fighterId" uuid, CONSTRAINT "PK_05d87d598d485338c9980373d20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "location" character varying NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."fights_method_enum" AS ENUM('KO', 'SUBMISSION', 'DECISION')`,
    );
    await queryRunner.query(
      `CREATE TABLE "fights" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "method" "public"."fights_method_enum" NOT NULL, "round" integer NOT NULL, "time" character varying NOT NULL, "eventId" uuid, "fighterAId" uuid, "fighterBId" uuid, "winnerId" uuid, CONSTRAINT "PK_f58a76631bc2c2bdef2a8628c95" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "rankings" ADD CONSTRAINT "FK_97fa3b60be070f2bb262b9de34e" FOREIGN KEY ("fighterId") REFERENCES "fighters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" ADD CONSTRAINT "FK_76786f5b3eee0a81261b3ae9c10" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" ADD CONSTRAINT "FK_c50c15f02c9e457d29ed420f7b9" FOREIGN KEY ("fighterAId") REFERENCES "fighters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" ADD CONSTRAINT "FK_21d315212d96dcb79ee5ce529c0" FOREIGN KEY ("fighterBId") REFERENCES "fighters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" ADD CONSTRAINT "FK_2e81bedfd44fcad0fe6c88ccafa" FOREIGN KEY ("winnerId") REFERENCES "fighters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "fights" DROP CONSTRAINT "FK_2e81bedfd44fcad0fe6c88ccafa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" DROP CONSTRAINT "FK_21d315212d96dcb79ee5ce529c0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" DROP CONSTRAINT "FK_c50c15f02c9e457d29ed420f7b9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fights" DROP CONSTRAINT "FK_76786f5b3eee0a81261b3ae9c10"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rankings" DROP CONSTRAINT "FK_97fa3b60be070f2bb262b9de34e"`,
    );
    await queryRunner.query(`DROP TABLE "fights"`);
    await queryRunner.query(`DROP TYPE "public"."fights_method_enum"`);
    await queryRunner.query(`DROP TABLE "events"`);
    await queryRunner.query(`DROP TABLE "rankings"`);
    await queryRunner.query(`DROP TYPE "public"."rankings_weightclass_enum"`);
    await queryRunner.query(`DROP TABLE "fighters"`);
    await queryRunner.query(`DROP TYPE "public"."fighters_weightclass_enum"`);
  }
}
