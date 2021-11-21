enum Enum_Rol{
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR = "ADMINISTRADOR"
}

enum Enum_EstadoUsuario {
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO'
}

enum Enum_EstadoProyecto{
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO" 
}

enum Enum_FaseProyecto{
    INICIADO = "INICIADO",
    EN_DESARROLLO = "EN_DESARROLLO",
    TERMINADO = "TERMINADO",
    NULO = ""
}

enum Enum_EstadoInscripcion{
    ACEPTADA = "ACEPTADA",
    RECHAZADA = "RECHAZADA",
    PENDIENTE = "PENDIENTE" //adicioné este estado para que sea el inicial
}

enum Enum_TipoObjetivo{
    GENERAL = "GENERAL",
    ESPECIFICO = "ESPECIFICO" ,
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_EstadoInscripcion, Enum_TipoObjetivo };