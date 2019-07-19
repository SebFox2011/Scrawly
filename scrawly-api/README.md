# Projet ScrawlyAPI

## Initialisation du projet
installation du projet symfony de base
> composer create-project symfony/skeleton scrawly-api

installation de doctrine
> composer req orm

## Initialisation de la base de données
copier coller .env et renommer en .env.local
Ajouter :
>DATABASE_URL=mysql://root:root@127.0.0.1:8889/scrawly

Lancer MAMP pour activer le server Apache / Mysql

puis créer la base de donnée:
> php bin/console doctrine:database:create

## Installation de Api Plateform
API Plateform : https://api-platform.com/ 
> composer req api

## Création des entités
Ajouter make bundle

> composer require symfony/maker-bundle --dev

Création des 3 entités Person, Poll et Choise avec api plateform

> php bin/console make:entity (sans nom d'entité pour avoir acces a api et mettre Yes)
 Personn (username string 255 no et email string 255 no)
 Poll (title string 255 no et slug string 255 no et created_at datetime )
 Choise (date datetime no) 
  
  php bin/console make:entity
  
   Class name of the entity to create or update (e.g. FiercePizza):
   > Poll
  
   Mark this class as an API Platform resource (expose a CRUD API for it) (yes/no) [no]:
   > yes
  
   created: src/Entity/Poll.php
   created: src/Repository/PollRepository.php
   
   Entity generated! Now let's add some fields!
   You can always add more fields later manually or by re-running this command.
  
   New property name (press <return> to stop adding fields):
   > title
  
   Field type (enter ? to see all types) [string]:
   > 
  
   Field length [255]:
   > 
  
   Can this field be null in the database (nullable) (yes/no) [no]:
   > 
  
   updated: src/Entity/Poll.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > slug
  
   Field type (enter ? to see all types) [string]:
   > 
  
   Field length [255]:
   > 
  
   Can this field be null in the database (nullable) (yes/no) [no]:
   > 
  
   updated: src/Entity/Poll.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > created_at
  
   Field type (enter ? to see all types) [datetime]:
   > 
  
   Can this field be null in the database (nullable) (yes/no) [no]:
   > 
  
   updated: src/Entity/Poll.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > 
             
    Success! 
              
   Next: When you're ready, create a migration with make:migration
   
  MacBook-Air-de-Sebastien:scrawly-api sebfox$ php bin/console make:entity
  
   Class name of the entity to create or update (e.g. GentleGnome):
   > Choise
  
   Mark this class as an API Platform resource (expose a CRUD API for it) (yes/no) [no]:
   > yes
  
   created: src/Entity/Choise.php
   created: src/Repository/ChoiseRepository.php
   
   Entity generated! Now let's add some fields!
   You can always add more fields later manually or by re-running this command.
  
   New property name (press <return> to stop adding fields):
   > date
  
   Field type (enter ? to see all types) [string]:
   > datetime
  
   Can this field be null in the database (nullable) (yes/no) [no]:
   > 
  
   updated: src/Entity/Choise.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   >  
             
    Success! 
             
   Next: When you're ready, create a migration with make:migration
   
  MacBook-Air-de-Sebastien:scrawly-api sebfox$ php bin/console make:entity Choise
  
   Your entity already exists! So let's add some new fields!
  
   New property name (press <return> to stop adding fields):
   > date
  
  
                                                                                                                          
   [ERROR] The "date" property already exists.                                                                            
                                                                                                                          
  
   New property name (press <return> to stop adding fields):
   > ©^C
  MacBook-Air-de-Sebastien:scrawly-api sebfox$ php bin/console make:entity
  
   Class name of the entity to create or update (e.g. FierceJellybean):
   > Choise
  
   Mark this class as an API Platform resource (expose a CRUD API for it) (yes/no) [no]:
   > yes
  
   created: src/Entity/Choise.php
   created: src/Repository/ChoiseRepository.php
   
   Entity generated! Now let's add some fields!
   You can always add more fields later manually or by re-running this command.
  
   New property name (press <return> to stop adding fields):
   > date
  
   Field type (enter ? to see all types) [string]:
   > date
  
   Can this field be null in the database (nullable) (yes/no) [no]:
   > 
  
   updated: src/Entity/Choise.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > 
             
    Success! 
  
   Next: When you're ready, create a migration with make:migration
   
  MacBook-Air-de-Sebastien:scrawly-api sebfox$ php bin/console make:entity Person
  
   Your entity already exists! So let's add some new fields!
  
   New property name (press <return> to stop adding fields):
   > poll
  
   Field type (enter ? to see all types) [string]:
   > relation
  
   What class should this entity be related to?:
   > Poll
  
  What type of relationship is this?
   ------------ ------------------------------------------------------------------ 
    Type         Description                                                       
   ------------ ------------------------------------------------------------------ 
    ManyToOne    Each Person relates to (has) one Poll.                            
                 Each Poll can relate to (can have) many Person objects            
                                                                                   
    OneToMany    Each Person can relate to (can have) many Poll objects.           
                 Each Poll relates to (has) one Person                             
                                                                                   
    ManyToMany   Each Person can relate to (can have) many Poll objects.           
                 Each Poll can also relate to (can also have) many Person objects  
                                                                                   
    OneToOne     Each Person relates to (has) exactly one Poll.                    
                 Each Poll also relates to (has) exactly one Person.               
   ------------ ------------------------------------------------------------------ 
  
   Relation type? [ManyToOne, OneToMany, ManyToMany, OneToOne]:
   > ManyToOne
  
   Is the Person.poll property allowed to be null (nullable)? (yes/no) [yes]:
   > no
  
   Do you want to add a new property to Poll so that you can access/update Person objects from it - e.g. $poll->getPeople()? (yes/no) [yes]:
   > 
  
   A new property will also be added to the Poll class so that you can access the related Person objects from it.
  
   New field name inside Poll [people]:
   > persons
  
   Do you want to activate orphanRemoval on your relationship?
   A Person is "orphaned" when it is removed from its related Poll.
   e.g. $poll->removePerson($person)
   
   NOTE: If a Person may *change* from one Poll to another, answer "no".
  
   Do you want to automatically delete orphaned App\Entity\Person objects (orphanRemoval)? (yes/no) [no]:
   > yes
  
   updated: src/Entity/Person.php
   updated: src/Entity/Poll.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > 
  
    Success! 
              
   Next: When you're ready, create a migration with make:migration
   
  MacBook-Air-de-Sebastien:scrawly-api sebfox$ php bin/console make:entity Person
  
   Your entity already exists! So let's add some new fields!
  
   New property name (press <return> to stop adding fields):
   > choise
  
   Field type (enter ? to see all types) [string]:
   > relation
  
   What class should this entity be related to?:
   > Choise
  
  What type of relationship is this?
   ------------ -------------------------------------------------------------------- 
    Type         Description                                                         
   ------------ -------------------------------------------------------------------- 
    ManyToOne    Each Person relates to (has) one Choise.                            
                 Each Choise can relate to (can have) many Person objects            
                                                                                     
    OneToMany    Each Person can relate to (can have) many Choise objects.           
                 Each Choise relates to (has) one Person                             
                                                                                     
    ManyToMany   Each Person can relate to (can have) many Choise objects.           
                 Each Choise can also relate to (can also have) many Person objects  
                                                                                     
    OneToOne     Each Person relates to (has) exactly one Choise.                    
                 Each Choise also relates to (has) exactly one Person.               
   ------------ -------------------------------------------------------------------- 
  
   Relation type? [ManyToOne, OneToMany, ManyToMany, OneToOne]:
   > ManyToMany
  
   Do you want to add a new property to Choise so that you can access/update Person objects from it - e.g. $choise->getPeople()? (yes/no) [yes]:
   > 
  
   A new property will also be added to the Choise class so that you can access the related Person objects from it.
  
   New field name inside Choise [people]:
   > persons
  
   updated: src/Entity/Person.php
   updated: src/Entity/Choise.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > 
              
    Success!             
  
   Next: When you're ready, create a migration with make:migration
   
  MacBook-Air-de-Sebastien:scrawly-api sebfox$ php bin/console make:entity Poll
  
   Your entity already exists! So let's add some new fields!
  
   New property name (press <return> to stop adding fields):
   > choise
  
   Field type (enter ? to see all types) [string]:
   > relation
  
   What class should this entity be related to?:
   > Choise
  
  What type of relationship is this?
   ------------ ------------------------------------------------------------------ 
    Type         Description                                                       
   ------------ ------------------------------------------------------------------ 
    ManyToOne    Each Poll relates to (has) one Choise.                            
                 Each Choise can relate to (can have) many Poll objects            
                                                                                   
    OneToMany    Each Poll can relate to (can have) many Choise objects.           
                 Each Choise relates to (has) one Poll                             
                                                                                   
    ManyToMany   Each Poll can relate to (can have) many Choise objects.           
                 Each Choise can also relate to (can also have) many Poll objects  
                                                                                   
    OneToOne     Each Poll relates to (has) exactly one Choise.                    
                 Each Choise also relates to (has) exactly one Poll.               
   ------------ ------------------------------------------------------------------ 
  
   Relation type? [ManyToOne, OneToMany, ManyToMany, OneToOne]:
   > OneToMany
  
   A new property will also be added to the Choise class so that you can access and set the related Poll object from it.
  
   New field name inside Choise [poll]:
   > 
  
   Is the Choise.poll property allowed to be null (nullable)? (yes/no) [yes]:
   > no
  
   Do you want to activate orphanRemoval on your relationship?
   A Choise is "orphaned" when it is removed from its related Poll.
   e.g. $poll->removeChoise($choise)
   
   NOTE: If a Choise may *change* from one Poll to another, answer "no".
  
   Do you want to automatically delete orphaned App\Entity\Choise objects (orphanRemoval)? (yes/no) [no]:
   > yes
  
   updated: src/Entity/Poll.php
   updated: src/Entity/Choise.php
  
   Add another property? Enter the property name (or press <return> to stop adding fields):
   > 

    Success!              
  
   Next: When you're ready, create a migration with make:migration

## Migration de la base de donnée
Installer migrations
> composer req migrations

php bin/console make:migration
php bin/console doctrine:migrations:migrate

## Démarrage du server
composer req server --dev

php bin/console server:run

puis se rendre à cette adresse : http://127.0.0.1:8000/api

## Gestion des datafixtures

composer require --dev doctrine/doctrine-fixtures-bundle

## Manipulation a réaliser si on veut recréer la database avec des id à 1
php bin/console doctrine:database:drop --force
php bin/console doctrine:database:create

php bin/console make:migration
php bin/console doctrine:migrations:migrate


