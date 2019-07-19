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
 