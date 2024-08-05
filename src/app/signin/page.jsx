
async function getData() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function SignIn() {
  const data = await getData()
  console.log(data)
  return (
    <section className='mt-[200px] mb-[100px]'>
      {
        data.map( (item) => {
          return(
            <div key={item.id}>
              {item.location}
              {/* {item.id} - {item.title} */}
            </div>
          )
        })
      }
    </section>
  )
}

export default SignIn
