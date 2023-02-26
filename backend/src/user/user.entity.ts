import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

@Entity()
export default class User {
    @PrimaryKey()
    _id!: ObjectId

    @SerializedPrimaryKey()
    id!: string

    @Property()
    username!: string

    @Property()
    password!: string

    @Property({
        onCreate: () => new Date()
    })
    createdAt = new Date();

    @Property({
        onUpdate: () => new Date(),
        onCreate: () => new Date()
    })
    updatedAt = new Date();
}