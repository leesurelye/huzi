<!-- 双 -->
<template>
  <div>
    
    <el-row :gutter="12"  class="fixed">
      <el-col :span="10">
        <el-card>
          <h4>对象A</h4>
          <ObjectForm @getFormData='receive_A_ObjectData' @updateAttr="revice_A_attribut"></ObjectForm>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card>
          <h4>对象关系</h4>
          <el-select v-model="relationship" placeholder="slect..">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> </el-select
        ></el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <h4>对象B</h4>
          <ObjectForm @getFormData="receive_B_ObjectData" @updateAttr="revice_B_attribut"></ObjectForm>
        </el-card>
      </el-col>
    </el-row>
    <div class="btn-group">
      <el-button @click="cancel = false">取消</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import ObjectForm from "../components/objectform/ObjectForm.vue";
import {post,get} from '@/network/request.js'
export default {
  name: "Double",
  data() {
    return {
      formData:{},
      options: [{
          value: '选项1',
          label: 'String'
        }, {
          value: '选项2',
          label: 'String'
        }, {
          value: '选项3',
          label: 'String'
        }, {
          value: '选项4',
          label: 'String'
        }, {
          value: '选项5',
          label: 'String'
        }],
        relationship: ''
      
    };
  },

  components: {
    ObjectForm,
  },

  computed: {},

  methods: {
    receive_A_ObjectData(data){ 
      this.formData.objectA=data; 
    },
    receive_B_ObjectData(data){
      this.formData.objectB=data
       
    },
    revice_A_attribut(attr){
      this.formData.objectA.attribute=JSON.stringify(attr) 
    },
    revice_B_attribut(attr){ 
      this.formData.objectB.attribute=JSON.stringify(attr)
    },
    submit(){
      this.formData.relationship=this.relationship
      // 提交表单数据
      post('/submit',this.formData)
      .then(res=>{
         this.$message.success("提交成功");
      }).catch(err=>{
        this.$message.error("提交失败");
      })
    }
  },
};
</script>
<style lang='less' scoped>
.fixed{ 
  padding: 12px;
  max-height: 560px; 
  overflow: auto;
  position: relative;
  
  top: 0;
  bottom: 0;

}
.btn-group{
  padding-top: 12px;
  display: flex;
  justify-content: center;
   
}
</style>