  //   const data = Object.fromEntries(formData)
  //   const dietaryRestrictions = formData.getAll("dietaryRestrictions")
  //   const allData = {...data,dietaryRestrictions}

  // import padsData from "./pads"
  // const [pads,setPads] = React.useState(padsData)  

  // function toggle(id){
  //   setPads(prevPads => prevPads.map(prevPad => {
  //     return prevPad.id===id?{...prevPad,on:!prevPad.on}:prevPad
  //   }))
  // }

    //   <form action={signUp}>
    //     <label htmlFor="email">Email:</label>
    //     <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />
    //     <label htmlFor="password">Password:</label>
    //     <input id="password" defaultValue="password123" type="password" name="password" />
    //     <label htmlFor="description">Description:</label>
    //     <textarea id="description" name="description" defaultValue="This is a description"></textarea>

    //     <fieldset>
    //       <legend>Employment Status:</legend>
    //       <label>
    //         <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
    //         Full-time
    //     </label>
    //     </fieldset>

    //     <fieldset>
    //       <legend>Dietary restrictions:</legend>
    //       <label>
    //         <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
    //         Gluten-free
    //     </label>
    //     </fieldset>

    //     <label htmlFor="favColor">What is your favorite color?</label>
    //     <select id="favColor" name="favColor" defaultValue="" required>
    //       <option value="" disabled>-- Choose a color --</option>
    //       <option value="red">Red</option>
    //     </select>
    //   </form>

        /* <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} /> */

// export default function Pad(props){
//     return (
//         <button style={{backgroundColor: props.color}} key={props.id} className= {props.on?"on":""} onClick={() => props.toggle(props.id)} ></button>
//     )
// }

{/* <img
src={props.isFilled ? starFilled : starEmpty}
alt={props.isFilled ? "filled star icon" : "empty star icon"}
className="favorite"
/> */}