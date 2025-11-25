CREATE TABLE "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "accounts_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "organizations" (
	"id" serial PRIMARY KEY NOT NULL,
	"admin_id" integer,
	"organization_name" text,
	"slogan" varchar(255),
	"website" varchar(1000),
	"contact_email" varchar(255),
	"cell_number" varchar(20),
	"phone" varchar(50),
	"verified" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "student_education_data" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" integer,
	"course" varchar(255) NOT NULL,
	"year_level" varchar(10) NOT NULL,
	"semester" varchar(20) NOT NULL,
	"institution" text NOT NULL,
	"institutional_address" text NOT NULL,
	"highest_education" text NOT NULL,
	"gpa" integer NOT NULL,
	"school" text NOT NULL,
	"school_address" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"account_id" integer NOT NULL,
	"full_name" text NOT NULL,
	"role_id" integer,
	"contact_number" varchar(50) NOT NULL,
	"birthdate" date NOT NULL,
	"age" varchar(10),
	"gender" varchar(100),
	"address" text NOT NULL,
	"city" varchar(255) NOT NULL,
	"province" varchar(255) NOT NULL,
	"country" varchar(50) NOT NULL,
	"bio" text,
	CONSTRAINT "users_account_id_unique" UNIQUE("account_id")
);
--> statement-breakpoint
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_admin_id_users_id_fk" FOREIGN KEY ("admin_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_education_data" ADD CONSTRAINT "student_education_data_student_id_users_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE no action ON UPDATE no action;