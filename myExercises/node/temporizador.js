const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function (){
  //(* por ordem de execução)
  // */5 - de 5 em 5 segundos (se colocar 5 executa apenas no segundo 5)
  // * - em qualquer minuto
  // 11 - as 11 horas
  // * - qualquer dia do mes
  // * - qualquer mes
  // 1 - segunda (0 domingo, 1 segunda, 2 terça ...)
  console.log('Executando tarefa 1!', new Date().getSeconds());
})

setTimeout(function (){
  tarefa1.cancel()
  console.log('Cancelando tarefa 1!');
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]  // dias da semana
regra.hour = 11  // hora do dia
regra.second = 30  // segundo de executar

const tarefa2 = schedule.scheduleJob(regra, function(){
  console.log('Executando tarefa 2!', new Date().getSeconds());
})