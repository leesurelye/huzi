
<template>
  <div >
    <h4>存储对象</h4>
    <el-card>
      <ObjectForm @getFormData='receiveObjectData' @updateAttr="reviceattribut"></ObjectForm>
    </el-card>
      <div class="btn-group">
        <el-button @click="cancel = false">取消</el-button>
        <el-button type="primary" @click="submitForm(formData)">提交</el-button>
      </div>
    
  </div>
</template>

<script>
// ajax request
import { get, put, del, post } from "@/network/request.js";
import ObjectForm from "@/components/objectform/ObjectForm.vue";
export default {
  name:'Single',
  created() {},
  data() {
    return { 
      formData: null,
    };
  },

  methods: {
    receiveObjectData(data){ 
      this.formData=data  
    },
    reviceattribut(attr){ 
      this.formData['attribute']=JSON.stringify(attr)  
    },
    submitForm() {
      post('/submit',this.formData)
      .then(res=>{
        this.$message.success("提交成功")
      }).catch(err=>{
        this.$message.error("提交失败")
      })
    },
  },
  components:{
    ObjectForm
  }
};
</script>
<style lang='less' scoped>
 
.el-card {
  position: relative;
  top: 0;bottom: 0;
  margin: 0 20px;
  max-height: 500px;
  overflow: auto;
  .el-table {
    margin-top: 15px;
  
  }
  .el-pagination {
    margin-top: 15px;
  }
  .btn-group {
    display: flex;
    justify-content: center;
  }
}
.btn-group{
  display: flex;
  justify-content: center;
  margin-top: 24px;
  position: relative;
  bottom: 0;

}
.el-form {
  width: 90%;
  .attr {
    margin: 24px;
  }

}
</style>