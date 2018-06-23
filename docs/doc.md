FORMAT: 1A
HOST: https://bj-decoupage-territorial.herokuapp.com/api/v1

# bj-decoupage-territorial API
API permettant de récupérer les informations du découpage territorial au Bénin.

**Note:** Les ressources et la description des requêtes sont en anglais.

# Group Departments

Informations liées aux départements.

## GET /departments
Récupérer tous les départements.

+ Response 200 (application/json)

        [
            {
                "departments": [
                    {
                        "name": "ALIBORI"
                    }, {
                        "name": "ATACORA"
                    }
                    ...
                ]
            }
        ]

## GET /departments/{name}/towns
Récupérer toutes les communes d'un département.

+ Parameters
    + name (string) - Name of a department.

+ Response 200 (application/json)

        [
            {
                "department": "ALIBORI",
                "towns": [
                    {
                        "name": "BANIKOARA"
                    }, {
                        "name": "GOGOUNOU"
                    }
                    ...
                ]
            }
        ]

## GET /departments/{name}/districts
Récupérer tous les arrondissements d'un département.

+ Parameters
    + name (string) - Name of a department.

+ Response 200 (application/json)

        [
            {
                "department": "ALIBORI",
                "districts": [
                    {
                        "name": "FOUNOUGO"
                    }, {
                        "name": "GOMPAROU"
                    }
                    ...
                ]
            }
        ]

## GET /departments/{name}/neighborhoods
Récupérer tous les quartiers d'un département.

+ Parameters
    + name (string) - Name of a department.

+ Response 200 (application/json)

        [
            {
                "department": "ALIBORI",
                "neighborhoods": [
                    {
                        "name": "FOUNOUGO"
                    }, {
                        "name": "GOMPAROU"
                    }
                    ...
                ]
            }
        ]

# Group Towns

Informations liées aux communes.

## GET /towns
Récupérer toutes les communes.

+ Response 200 (application/json)

        [
            {
                "towns": [
                    {
                        "name": "BANIKOARA"
                    }, {
                        "name": "GOGOUNOU"
                    }
                    ...
                ]
            }
        ]

## GET /towns/{name}/districts
Récupérer tous les arrondissements d'une commune.

+ Parameters
    + name (string) - Name of a town.

+ Response 200 (application/json)

        [
            {
                "town": "BANIKOARA",
                "districts": [
                    {
                        "name": "FOUNOUGO"
                    }, {
                        "name": "GOMPAROU"
                    }
                    ...
                ]
            }
        ]

## GET /towns/{name}/neighborhoods
Récupérer tous les quartiers d'une commune.

+ Parameters
    + name (string) - Name of a town.

+ Response 200 (application/json)

        [
            {
                "town": "BANIKOARA",
                "neighborhoods": [
                    {
                        "name": "BOFOUNOU"
                    }, {
                        "name": "FOUNOUGO-BOUTERA"
                    }
                    ...
                ]
            }
        ]

# Group Districts

Informations liées aux arrondissements.

## GET /districts
Récupérer tous les arrondissements.

+ Response 200 (application/json)

        [
            {
                "districts": [
                    {
                        "name": "FOUNOUGO"
                    }, {
                        "name": "GOMPAROU"
                    }
                    ...
                ]
            }
        ]

## GET /districts/{name}/neighborhoods
Récupérer tous les quartiers d'un arrondissement.

+ Parameters
    + name (string) - Name of a district.

+ Response 200 (application/json)

        [
            {
                "district": "FOUNOUGO",
                "neighborhoods": [
                    {
                        "name": "BOFOUNOU"
                    }, {
                        "name": "FOUNOUGO-BOUTERA"
                    }
                    ...
                ]
            }
        ]

# Group Neighborhoods

Informations liées aux quartiers.

## GET /neighborhoods?page={page}&page_size={page_size}
Récupérer tous les quartiers.

+ Parameters
    + page (integer, optional) - The page selection.
        
        + Default: `1`
    
    + page_size (integer, optional) - The maximum number of neighborhoods to return.
        
        + Default: `20`

+ Response 200 (application/json)

        [
            {
                "neighborhoods": [
                    {
                        "name": "BOFOUNOU"
                    }, {
                        "name": "FOUNOUGO-BOUTERA"
                    }
                    ...
                ]
            }
        ]

