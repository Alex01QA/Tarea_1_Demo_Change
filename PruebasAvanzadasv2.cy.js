/// <reference types="cypress" />

//Suite de casos de prueba avanzados
describe('Tercer feature de casos de prueba avazadas', function() {

    before(function() {
        //Aqui cargamos el archivo de datos
        cy.fixture('carritoCompras').then(function(datos){
            this.datos = datos
        })
    })

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        //cy.viewport(1366, 1200)
    })

// Caso de prueba 7
    it("Realizar compra de celular basada en titulo", function(){
        cy.get("ul[class='nav-pills categorymenu'] > li > div[class='subcategories']:has(a:contains('Cheeks'))")
        .should('be.hidden') // Verificar que el dropdown esté oculto por defecto
        .invoke('attr', 'style', 'display: block;') // Esto es para mostrar el dropdown si está oculto, ya que algunos dropdowns pueden estar ocultos por defecto
        .should('be.visible')

        cy.get(":nth-child(3) > .subcategories > :nth-child(1) > :nth-child(1) > a").click()

        // esto es lo mismo que lo definido en el archivo PruebasAvanzadas.cy.js pero utilizando un comando personalizado para evitar repetir codigo
        cy.agregarProductoCarrito(this.datos.nombreProducto1)
        cy.agregarProductoCarrito(this.datos.nombreProducto3)
        cy.agregarProductoCarrito(this.datos.nombreProducto4)
    })
})