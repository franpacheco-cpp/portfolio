import os
import json
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio.settings")
django.setup()


def migrar_datos():
    from proyectos.models import Proyecto, Tecnologia

    with open("db.json", "r", encoding="utf-8") as file:
        data = json.load(file)

    for item in data.get("proyectos", []):
        proyecto, created = Proyecto.objects.get_or_create(
            nombre=item["nombre"],
            defaults={
                "descripcion": item.get("descripcion", ""),
                "img": item.get("img", ""),
                "url": item.get("url", ""),
            },
        )

        for tec_data in item.get("tecnologias", []):
            tec_obj, _ = Tecnologia.objects.get_or_create(nombre=tec_data["nombre"])
            proyecto.tecnologias.add(tec_obj)

    print("Migración completada exitosamente.")


if __name__ == "__main__":
    migrar_datos()
