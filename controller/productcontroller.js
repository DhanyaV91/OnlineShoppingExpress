const Shop = require('../model/Shop');

exports.getProductDetails = async (req, res, next) => {
    var prodtype = req.params.type;
      try{
         const prods = await Shop.find({prod_type:prodtype});
         res.json(prods);
      }catch(error){
         res.json({msg: error});
      }
 }

 /* exports.saveEmpDetails = async (req, res, next) => {

    const empid = req.body.empid;
     const empname = req.body.empname;
     const empdept = req.body.empdept;
     const addr = req.body.addr;
     const contact = req.body.contact;
  
   const emp = new Emp({
    empid:empid,
    empname:empname,
    empdept:empdept,
    addr:addr,
    contact:contact
   });

   try{
      const saveEmp = await emp.save();
      res.json(saveEmp);
   }catch(error){
      res.json({msg: error});
   }
} */

/* exports.getEmpRecord = async (req, res, next) => {
   var empid = req.params.id;
   try{
      const emp = await Emp.find({empid:empid});
      res.json(emp);
   }catch(error){
      res.json({msg: error});
   }
} */

/* exports.delEmpDetails = async (req, res, next) => {
   var empid = req.params.id;
   try{
      const emp = await Emp.remove({empid:empid});
      console.log(emp);
      res.json(emp);
   }catch(error){
      res.json({msg: error});
   }
} */