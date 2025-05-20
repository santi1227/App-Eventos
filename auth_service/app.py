from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

usuarios = [{"usuario": "admin", "clave": "1234"}]

@app.post("/login")
async def login(usuario: str, clave: str):
    for u in usuarios:
        if u["usuario"] == usuario and u["clave"] == clave:
            return {"estado": "exitoso"}
    return {"estado": "fallido"}