import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ nullable: true })
    userEmail: string;


    @Column({ nullable: true })
    userGender: string

    @Column({ nullable: true })
    enjoyedLearning : boolean

    constructor() {
        this.id = 0; // Initialize with a default value
        this.firstName = 'Fanie';
        this.lastName = 'Johnson';
        this.userEmail = 'faniejohnnywalker@gamail.com';
        this.userGender = "male"
        this.enjoyedLearning = true;
      }

}
