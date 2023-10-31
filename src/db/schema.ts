import { relations } from "drizzle-orm";
import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";




export var users = pgTable(
    "users",
    {
        id: serial("id").primaryKey(),
        name: text("name"), 
        email: text("email"),
    }
)

export var userRelations = relations(users, ({one}) => ({
    profile: one(profiles, {
        fields: [users.id],
        references: [profiles.user_id]
    })
}))

export var profiles = pgTable(
    "profiles",
    {
        id: serial("id").primaryKey(),
        user_id: integer("user_id").notNull().references(() => users.id),
        bio: text("bio")
    }
)