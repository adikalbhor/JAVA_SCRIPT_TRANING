let claimStatus = ["APPROVED","REJECTED","APPROVED","APPROVED","PENDING_DOCS"]
let i=0;
let approvecount =0;
let rejectedcount =0;
let pendingcount =0;
for (let claimStatu of claimStatus){
    console.log(i +1 ,". ",claimStatu);
    i++;
    if(claimStatu === "APPROVED"){
        approvecount++;
    }else if (claimStatu === "REJECTED"){
        rejectedcount++;
    }else{
        pendingcount++;
    }    
}
console.log("Total count is =",claimStatus.length, ", Total Approved Count is = ",approvecount ,", Total Rejected Count is = ",rejectedcount,", Total Rejected  Count is = ",rejectedcount)