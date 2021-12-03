import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    driver_license: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(name: string, email:string, password: string, driver_license: string) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.driver_license = driver_license;
        this.admin = false;
        this.created_at = new Date();
    }
}

export { User }
