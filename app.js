new Vue({
    el: '#app',
   data: {
        playing: false,
        playerLife: 100,
        monsterLife: 100,
        atackPlayer: 0,
        atackMonster: 0,
        heal: 0, 
        log: []
   },
   computed: {
     hasResult(){
        return this.playerLife <= 0 || this.monsterLife <= 0
     }
   }, 
   methods: {
      random(){
         if(this.playerLife <= 100 && this.playerLife > 0)
         return(Math.floor(Math.random() * 11))
      },
      start(){
         this.playing = !this.playing
         this.monsterLife = 100
         this.playerLife = 100
         this.log = []
      },

      atack() {
         this.heal = 0
         this.atackPlayer = this.random()
         this.atackMonster = this.random()

         this.playerLife -= this.atackMonster
         this.monsterLife -= this.atackPlayer

         this.registerLog(`Monstro atacou player com ${this.atackMonster}`, 'monster')
         this.registerLog(`Player atacou monstro com ${this.atackPlayer}`, 'player')
      },
      superAtack() {
         this.heal = 0
         this.atackPlayer = this.random()*2
         this.atackMonster = this.random()*1

         this.playerLife -= this.atackMonster
         this.monsterLife -= this.atackPlayer
         
         this.registerLog(`Monstro atacou player com ${this.atackMonster}`, 'monster')
         this.registerLog(`Player atacou monstro com ${this.atackPlayer}`, 'player')
         
      },
      healAndHurt(){
         this.heal = this.random()
         this.atackMonster = this.random()
   
         this.playerLife -= this.atackMonster
         this.playerLife += this.heal

         this.registerLog(`Monstro atacou player com ${this.atackMonster}`, 'monster')
         this.registerLog(`Player curou ${this.heal}`, 'player')
        },

        integerPlayerLife() {
            if(this.playerLife >= 100){
               return(this.playerLife = 100)
            }else if(this.playerLife < 0){
               return(this.playerLife = 0)
            } else{
               return(this.playerLife)
            }
        },

        integerMonsterLife() {
         if(this.monsterLife >= 100){
            return(this.monsterLife = 100)
         }else if(this.monsterLife < 0){
            return(this.monsterLife = 0)
         } else{
            return(this.monsterLife)
         }
     },
     registerLog(msg, cls){
      this.log.unshift({msg, cls})
     }
   }
})