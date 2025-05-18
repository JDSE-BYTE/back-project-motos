import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCarritoRelationToUsuario1747518760441 implements MigrationInterface {
    name = 'AddCarritoRelationToUsuario1747518760441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_51cb14b2fef22fb1bff5af2d92\` ON \`user\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_51cb14b2fef22fb1bff5af2d92\` ON \`user\` (\`carritoId\`)`);
    }

}
