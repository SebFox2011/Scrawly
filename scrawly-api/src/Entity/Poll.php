<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PollRepository")
 */
class Poll
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Person", mappedBy="poll", orphanRemoval=true)
     */
    private $persons;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Choise", mappedBy="poll", orphanRemoval=true)
     */
    private $choise;

    public function __construct()
    {
        $this->persons = new ArrayCollection();
        $this->choise = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection|Person[]
     */
    public function getPersons(): Collection
    {
        return $this->persons;
    }

    public function addPerson(Person $person): self
    {
        if (!$this->persons->contains($person)) {
            $this->persons[] = $person;
            $person->setPoll($this);
        }

        return $this;
    }

    public function removePerson(Person $person): self
    {
        if ($this->persons->contains($person)) {
            $this->persons->removeElement($person);
            // set the owning side to null (unless already changed)
            if ($person->getPoll() === $this) {
                $person->setPoll(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Choise[]
     */
    public function getChoise(): Collection
    {
        return $this->choise;
    }

    public function addChoise(Choise $choise): self
    {
        if (!$this->choise->contains($choise)) {
            $this->choise[] = $choise;
            $choise->setPoll($this);
        }

        return $this;
    }

    public function removeChoise(Choise $choise): self
    {
        if ($this->choise->contains($choise)) {
            $this->choise->removeElement($choise);
            // set the owning side to null (unless already changed)
            if ($choise->getPoll() === $this) {
                $choise->setPoll(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getTitle();
    }
}
