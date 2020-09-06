-- +goose Up
-- SQL in this section is executed when the migration is applied.
create table "Users"
(
    id serial not null,
    login nchar not null,
    email nchar not null,
    nick_name nchar not null,
    password text,
    reg_date timestamp not null,
    last_visit timestamp,
    last_edit timestamp
);

create unique index users_email_uindex
    on "Users" (email);

create unique index users_id_uindex
    on "Users" (id);

create unique index users_login_uindex
    on "Users" (login);

create unique index users_nick_name_uindex
    on "Users" (nick_name);

create unique index users_reg_date_uindex
    on "Users" (reg_date);

alter table "Users"
    add constraint users_pk
        primary key (id);

-- +goose Down
-- SQL in this section is executed when the migration is rolled back.
DROP TABLE "Users";
