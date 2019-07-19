<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190719102127 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE choise (id INT AUTO_INCREMENT NOT NULL, poll_id INT NOT NULL, date DATE NOT NULL, INDEX IDX_8B6948C33C947C0F (poll_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE person (id INT AUTO_INCREMENT NOT NULL, poll_id INT NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, INDEX IDX_34DCD1763C947C0F (poll_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE person_choise (person_id INT NOT NULL, choise_id INT NOT NULL, INDEX IDX_17CC7875217BBB47 (person_id), INDEX IDX_17CC7875F966F153 (choise_id), PRIMARY KEY(person_id, choise_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE poll (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE choise ADD CONSTRAINT FK_8B6948C33C947C0F FOREIGN KEY (poll_id) REFERENCES poll (id)');
        $this->addSql('ALTER TABLE person ADD CONSTRAINT FK_34DCD1763C947C0F FOREIGN KEY (poll_id) REFERENCES poll (id)');
        $this->addSql('ALTER TABLE person_choise ADD CONSTRAINT FK_17CC7875217BBB47 FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE person_choise ADD CONSTRAINT FK_17CC7875F966F153 FOREIGN KEY (choise_id) REFERENCES choise (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE person_choise DROP FOREIGN KEY FK_17CC7875F966F153');
        $this->addSql('ALTER TABLE person_choise DROP FOREIGN KEY FK_17CC7875217BBB47');
        $this->addSql('ALTER TABLE choise DROP FOREIGN KEY FK_8B6948C33C947C0F');
        $this->addSql('ALTER TABLE person DROP FOREIGN KEY FK_34DCD1763C947C0F');
        $this->addSql('DROP TABLE choise');
        $this->addSql('DROP TABLE person');
        $this->addSql('DROP TABLE person_choise');
        $this->addSql('DROP TABLE poll');
    }
}
