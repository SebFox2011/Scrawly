<?php

namespace App\DataFixtures;

use App\Entity\Choise;
use App\Entity\Person;
use App\Entity\Poll;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\Date;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        /**
         * Poll
         */
        $poll =  new Poll();
        $poll-> setTitle("Exemple de Poll");
        $poll-> setSlug("exemple-de-poll");
        $poll-> setCreatedAt(new \DateTime('2019-08-18T10:00:00'));

        $manager->persist ($poll);

        /**
         * Person
         */
        $person1 = new Person();
        $person1->setUsername("SebFox");
        $person1->setEmail("sebfox@yopmail.com");
        $person1->setPoll($poll);

        $manager->persist ($person1);

        $person2 = new Person();
        $person2->setUsername("Pascal");
        $person2->setEmail("pascal@yopmail.com");
        $person2->setPoll($poll);

        $manager->persist ($person2);

        /**
         * Choise
         */

        $choise1 = new Choise();
        $choise1-> setDate(new \DateTime('2019-10-18'));
        $choise1-> setPoll($poll);
        $choise1->addPerson($person1);
        $choise1->addPerson($person2);

        $manager->persist ($choise1);

        $choise2 = new Choise();
        $choise2-> setDate(new \DateTime('2019-10-19'));
        $choise2-> setPoll($poll);
        $choise2->addPerson($person1);
        $choise2->addPerson($person2);

        $manager->persist ($choise2);

        $manager->flush();
    }
}
