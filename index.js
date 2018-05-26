//
class Bot{
  init(TOKEN){
    return new Promise((resolve, reject) => {
      let url = `https://api.telegram.org/bot${TOKEN}/getMe`
      resolve(url, (error, r, body) =>{
        const response = JSON.parse(body).result
        if(error) return
        if(!response) return
        this.id = response.id || ''
        this.first_name = response.first_name || ''
        this.last_name = response.last_name || ''
        this.user_name = response.user_name || ''
        this.language_code = response.language_code || ''
        resolve()
      })
    })
  }
  getName() {
    if(this.last_name){
      return `${this.first_name} ${this.last_name}`
    }
    else {
      return `${this.first_name}`
    }
  }

  introduceYourself() {
    console.log(`Hello, my name is ${this.getName()}. You can talk to me through my username: ${this.user_name}`);
  }
}

TOKEN = `546849033:AAFn4BU2nySgqrmkt9dqdJpYWWL-UmW06Jk`
const b = new Bot()
b.init(TOKEN).then (()=>{
  b.introduceYourself()
})
