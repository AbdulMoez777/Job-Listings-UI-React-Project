import React from 'react'
import Card from './components/Card'
const App = () => {

   const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Islamabad, Pak"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://icon2.cleanpng.com/20190731/yrb/kisspng-gift-card-jvck-velvet-underground-jw-music-1713875057521.webp",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Karachi, Pak"
  },
  {
    brandLogo: "https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-27.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS App Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payPerHour: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$55/hr",
    location: "Lahore, Pak"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAqP8No_nw1fowHY2AGMpAaKxhfDryTBidQ&s",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Backend .NET Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$42/hr",
    location: "Islamabad, Pak"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/044/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$38/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "AI Research Assistant",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$58/hr",
    location: "Islamabad, Pak"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-COfTJirCX7UjVZBOliOUdgitqQz1pi-3DQ&s",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$62/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://s3-symbol-logo.tradingview.com/intel--600.png",
    companyName: "Intel",
    datePosted: "12 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$44/hr",
    location: "Lahore, Pak"
  }
];



 

  return (
    <div className='parent'>
      
      {jobOpenings.map(function(elem,  idx){


        return <div key={idx}>
           <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour} brandLogo={elem.brandLogo}/>
           </div>

      })}
    </div>
  )
}

export default App
