import React from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";




function AdminScreen()
{
    return(
        <>
        

        <AdminHeader/>
        <section class="content">
    <div class="content container-fluid">
        <div class="block-header">
            <div class="row clearfix">
                <div class="col-lg-5 col-md-5 col-sm-12">
                    <h2>Flot Chart</h2>
                    <ul class="breadcrumb padding-0">
                        <li class="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Charts</a></li>
                        <li class="breadcrumb-item active">Flot Chart</li>
                    </ul>
                </div>            
                <div class="col-lg-7 col-md-7 col-sm-12">
                    <div class="input-group m-b-0">                
                        <input type="text" class="form-control" placeholder="Search..."/>
                        <span class="input-group-addon">
                            <i class="zmdi zmdi-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
<div class="container">

  
      <div class="row clearfix">
<div class="col-lg-12">
    <div class="card">
        <div class="container">
            your display Here
        </div>
    </div>
</div>
      </div> 
    </div>          
    </div>
</section>
<AdminFooter/>
        


        
        </>
    )
}

export default AdminScreen