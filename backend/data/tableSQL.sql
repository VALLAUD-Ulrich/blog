begin; 

create domain "email" as text CHECK(
    value ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
);


create table if not exists "roles" (
    "id" int GENERATED always AS IDENTITY PRIMARY KEY,
    "label" varchar(255) not null,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz
);

create table if not exists "users" (
    "id" INT GENERATED ALWAYS AS IDENTITY primary key,
    "firstname" varchar(255) not null,
    "lastname" varchar(255) not null,
    "email" email not null,
    "password" varchar(60) not null,
    "role_id" int not null references roles(id) on delete cascade,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz

);
create table if not exists "articles" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" varchar(255) not null,
    "content" text not null,
    "users_id" int not null references users(id) on delete cascade,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz
);
create table if not exists "categories" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" varchar(255) not null,
    "articles_id" int not null references articles(id) on delete cascade,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz
);
create table if not exists "articles_to_categories" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "articles_id" int not null references articles(id) on delete cascade,
    "categories_id" int not null references categories(id) on delete cascade,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz
);

create table if not exists "comments" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "articles_id" int not null,
    "users_id" int not null,
    "content" text not null,
    "created_at" timestamptz not null default now(),
    "updated_at" timestamptz
);

commit; 