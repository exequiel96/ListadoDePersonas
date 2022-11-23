const personas =[
    new Persona('Juan', 'Perez'),
    new Persona('Carla', 'Lara')
]

function mostrarPersonas(){
    console.log('Se esta ejecutando el metodo mostar personas');
    let texto= '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById('personas').innerHTML= texto;
}
function agregarPersona(){
    console.log('se esta agregando una persona');
    const forma= document.forms['forma'];
    const nombre= forma['nombre'];
    const apellido= forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona= new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    }
    else{
        console.log('No hay informacion que agregar');
    }
    
}