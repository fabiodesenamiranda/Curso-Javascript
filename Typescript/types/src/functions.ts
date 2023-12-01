type User = {
    name: string,
    id: number
}

type LevelAdmin = "teacher" | "coodenator" | "manager"


type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin

let fabio: UserAdmin = {
    name: "Fabio",
    id:0,
    isAdmin: true,
    level: "manager"
}