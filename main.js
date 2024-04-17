// ჯავასკრიპტი თეორიის ნაწილი

////////////////////////////////////////////////////////////

// რა განსხვავებაა null-სა და undefinde-ს შორის

// მოდი ვთქვათ, რომ ორივე Data Type-ა ამავდროულად, ორივე პრიმიტიული ტიპისაა, რაც ნიშნავს , რომ
// მათზე მანიპულაცია შესაძლებელია. ჩვენ დეველპერები null-ს გამიზნულად ვანიჭებთ ცვლადს , მას აღვწერთ
// და ვეუბნებით ჩვენს კომპიუტერს, რომ მე ეს ცვლადი მაქვს შეიძლება ამ წამს არ ვიყენებ , მაგრამ ეს ცვლადი
// აღწერილია და შეიძლება მომავალში მე ის გამოვიყენო (ვიმანიპულირო მასზე)

// Let's say that both are Data Types at the same time, both are primitive types, which means that
// They can be manipulated. We developers purposely assign null to a variable, we describe it
// and we tell our computer that I have this variable, maybe I'm not using it right now, but this variable
// described and I may use it (manipulate it) in the future

// ჩვენ undefined-ს გამიზნულად არ ვანიჟებთ არაფერს ის ავტომატურად იჩენს თავს კონსოლის დროს,როცა
// ბიექტის მნიშვნელობის არარსებობა ხდება ეს იმას ნიშნავს, რომ ჩვენი კმპიუტერ ვერ ხვდება თუ, რას ვეუბნებით.

// We don't intentionally set undefined to anything
// The absence of the value of the object means that our computer does not understand what we are telling it.

////////////////////////////////////////////////////////////

// ავხსნათ რა არის Event Delgation

// მოდი განვიხილოთ რა არის ივენთის მსმენელი ჩვენ მას DOM-ში მანიპულაციისთვის ვიყენებთ
// სწორედ Event Delegation-ის მთელი მუღამი ისაა , რომ ჩვენ შეგვიძლია მშობელს ვუბრძანოთ
// მოსმენა (parent.addEventListener) და ეს ავტომატურად გადაეცემა ყველა ამ (parent)-ის
// შვილ ელემენტს

// Let's take a look at what an event listener is. We use it to manipulate the DOM
// The whole point of Event Delegation is that we can command the parent
// listen for (parent.addEventListener) and this will automatically be passed to all of this (parent).
// child element

////////////////////////////////////////////////////////////

// ავხსნათ რა არის this ჯავასკრიპტში

//this-არის მიმთითებელი, რომ კონკრეტულად ეს რაღაც გვინდა მას ვიყენებთ ხშირად ობიექტებთან
// და ასევე გვხვდება კლასებთან მუშაობისას Arrow ფუნქციას ვერ ვიყენებთ მასთან ამიტომ გვიწევს
// ვემუშავოთ ანონიმური ფუნქციით Function(){this.name = name}

//

////////////////////////////////////////////////////////////

// ავხსნათ რა არის Promise

// Promise არის მეთოდი Async სამუშაოდ,მაგალითად Fetch Data ან ნებისმიერი რამ რაც ასინქრონულია
// მას გააჩნია სამი Case ესენია:Pending(დალოდება),FullField(წარმატებით დასრულება) და Reject(წარუმატებლად დასრულება)
//

// ფრომისი იწერება როცა ზუსტად არვიცით შესრულდება თუ არა ესა თუ ეს ლოგიკა
// ფენდინგის პერიოდი რა დროშიც უნდა შესრულდეს ფრომისი
// ფულფილდის ქეისი - ანუ შესრულდა
// რეჯექთი

// all - არაქვს მნიშვნელობა თაიმაუთს მაინც ერთნაირად გვიბრუნებს პასუხს, ერთის რეჯექთზე ყველა რეჯექთდება
// race - რმელიც პირველი ჩარენდერდება იმას დააბრუნებს
// any - მთავარია ერთი მაინც შესრულდეს ყველა შესრულდება
// AllSettled - მოგვდის ინფორმაცია,როგორც წარმატებულ,ასევე წარუმატებელ შემთხვევაში

/* const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("daresolvda");
  }, 1000);
});
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("meore Rejected");
  }, 10);
});

async function main() {
  try {
    console.log('hello')
    const resp1 = await myPromise;
    console.log(resp1, "resp1");

    const resp2 = await myPromise2;
    console.log(resp2, "resp2");
  } catch (er) {
    console.log(er, "error");
  }finally{
    console.log('Finally')
  }
}
 */
/* main();
 */
/* Promise.race([fetchData(),fetchData2()]).then(res => {
  console.log(res)
}) */

/* Promise.any([fetchData(),fetchData2()]).then(res => {
  console.log(res)
})
 */

/* Promise.allSettled([fetchData(),fetchData2()]).then(res => {
  console.log(res)
})
 */

////////////////////////////////////////////////////////////////

// Sleepr ფუნქცია

/* const sleep = (sec) => {
    return new Promise(res => {
      setTimeout(() => {
        res()
      }, sec);
    })
  }

  async function main(){
    console.log('first')
    await sleep(2000)
    console.log('secon after sleep function')
  }

  main()
 */

///////////////////////////////////////////////////////////////

// რა განსხვავბეა Reference და Value-ს შორის

// Reference მიმართულია არაპრიმიტიული ტიპებისკენ Function და Objects რომლებიც განიცდიან მუტაციას
// მაგალითად თუ ავიღებთ ობიექტს და შემდეგ მას შევუცვლით name-ს ან ნებისმიერ სხვას ის შეიცვლება
// მაგ ...
/* const obj2 = obj1

console.log(obj2)

obj2.name = 'aleko'
console.log(obj1) */

// Value მიმართულია პრიმიტიული ტიპებისკენ (String,number,Null,Undefined.......) რომლებიც არ განიცდიან მუტაციას
// მაგალითად ჩვენ თუ ავიღებთ სახელს (let name = 'gela') და შემდეგ შევეცდებით, რომ ეს სახელი შევცვალოთ
// და დავაკონსოლოთ ეს წარუმატებელი იქნება რადგან პრიმიტიული ნიშნავს რომ ის მუტაციას არ განიცდის
// ჩვენი კომპიუტერი ადგა ამ Name-ს უნიკალური ადგილი გამოუნახა ჩვენს Ram-ში და ამ უნიკალურ ადგილს ჩვენ ვერ გადავაწერთ ვერაფერს
// მაგ ...
/* 
let name1 = 'gela'
let name2 = name1
name2 = 'Givi'
console.log(name1) */


///////////////////////////////////////////////////////////////
