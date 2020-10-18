<template>
  <div>
    <el-form>
      <el-form-item label="ObjectName:">
        <el-row :gutter="20">
          <el-col :span="11">
            <el-input v-model="formData.objectName" @blur="sendObjectName"  placeholder="Please input object name"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <h5>Attribut</h5>
      <div class="attr" v-for="index of attrNum" :key="index">
        <el-row :gutter="20">
          <el-col :span="4"> 
            <el-input  v-model="attrbutes[index-1].key" placeholder="KEY" @blur="updateAttribute"></el-input></el-col>
          <el-col :span="1"
            ><div><i class="el-icon-link"></i></div
          ></el-col>
          <el-col :span="8"
            ><el-input placeholder="Please input value" v-model="attrbutes[index-1].value" @blur="updateAttribute"></el-input
          ></el-col>
          <div v-if="index == attrNum">
            <el-button
              type="primary"
              icon="el-icon-plus"
              circle
              @click="addAttr"
            ></el-button>
            <el-button
              type="info"
              icon="el-icon-minus"
              circle
              @click="removeAttr"
            ></el-button>
          </div>
        </el-row>
      </div>
    </el-form>
    <!-- 上传组件 -->
    <el-upload
      class="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"
    >
      <el-button size="small" type="primary">选择图片：</el-button>
      <div slot="tip" class="el-upload__tip">
        请上传jpg/png文件
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      fileList:[],
      attrNum: 1,
      formData: {
        objectName: "", 
        imgPath: "",
      },
      attrbutes:[
        {key:'',value:''}
      ] 
    };
  },

  methods: {
    sendObjectName(){ 
      this.$emit('getFormData',this.formData)
    },
    addAttr(e) {
      let attr = {key:'',value:''};
      this.attrNum++;
      this.attrbutes.push(attr);  
      // 触发父组件接收新变更的属性
      this.$emit('updateAttr',this.attrbutes)
    },
    updateAttribute(){
      this.$emit('updateAttr',this.attrbutes)
    },
    removeAttr(e) {
      if (this.attrNum > 1) {
        this.attrNum--;
        this.attrbutes.splice(-1,1)
        this.$emit('updateAttr',this.attrbutes)
        
      } else {
        this.$message.warning("对象属性至少为一个");
      }
    },
     
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      
    },
  },
};
</script>
<style lang='less' scoped>
.el-card {
  margin: 0 20px;
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
.el-form {
  width: 90%;
  .attr {
    margin: 24px;
  }
}
</style>