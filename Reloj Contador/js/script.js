(function() {
    
    var actualizarHora = function(){

        var pDiaSemana = document.getElementById('diaSemana')
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pAnno = document.getElementById('anno')

        var hora = document.getElementById('hora'),
        minutos = document.getElementById('minutos'),
        segundos = document.getElementById('segundos'),
        ampm = document.getElementById('ampm')
        
        var day = document.getElementById('day'),
        month = document.getElementById('month'),
        year = document.getElementById('year')
        
        var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        var mesesAnno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        
        var fecha_actual = new Date()
        
        var newHours = fecha_actual.getHours(),
        newMinutes = fecha_actual.getMinutes()
        newSeconds = fecha_actual.getSeconds(),
        newYear = fecha_actual.getFullYear(),
        newMonth = parseInt(fecha_actual.getMonth() + 1),    

        newDay = fecha_actual.getDate()

        // Para la fecha en palabras
        pDiaSemana.textContent = diasSemana[fecha_actual.getDay()]
        pDia.textContent = newDay
        pMes.textContent = mesesAnno[newMonth - 1]
        pAnno.textContent = newYear

        if (newHours < 10) {
            hora.textContent = `0${newHours}`
        }else{
            hora.textContent = newHours
        }

        if (newMinutes < 10) {
            minutos.textContent = `0${newMinutes}`
        }else{
            minutos.textContent = newMinutes
        }

        if (newSeconds < 10) {
            segundos.textContent = `0${newSeconds}`
        }else{
            segundos.textContent = newSeconds
        }

        if(newHours > 12){
            ampm.textContent = 'pm'
        }else{
            ampm.textContent = 'am'
        }

        day.textContent = newDay
        
        if (newMonth < 10) {
            month.textContent = `0${newMonth}`
        }else{
            month.textContent = newMonth
        }
        
        year.textContent = newYear
    }

    actualizarHora();
    var interval = setInterval(actualizarHora, 1000)
}())