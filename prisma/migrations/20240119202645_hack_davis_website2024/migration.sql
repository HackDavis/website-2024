-- CreateTable
CREATE TABLE "team_members" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "profile_image_url" TEXT NOT NULL,
    "team_category" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);
