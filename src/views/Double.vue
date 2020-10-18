<!-- 双 -->
<template>
  <div>
    <el-button type="success" icon="el-icon-tickets" @click="single">单 </el-button>
    <el-button type="primary" icon="el-icon-document-copy" @click="double">双</el-button>
    <el-row :gutter="12" class="fixed">
      <el-col :span="10">
        <el-card>
          <h4>对象A</h4>
          <ObjectForm
            @getFormData="receive_A_ObjectData"
            @updateAttr="revice_A_attribut"
          ></ObjectForm>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card>
          <h4>对象关系</h4>
          <el-row :gutter="4">
            <el-col :span="20">
              <el-input
                size="mini"
                v-model="newRelation"
                placeholder="请输入关系"
              ></el-input>
            </el-col>
            <el-col :span="2">
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-plus"
                @click="addRelation"
                circle
              ></el-button
            ></el-col>
          </el-row>
          <el-select v-model="relationship" placeholder="slect..">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option></el-select
        ></el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <h4>对象B</h4>
          <ObjectForm
            @getFormData="receive_B_ObjectData"
            @updateAttr="revice_B_attribut"
          ></ObjectForm>
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
import { post, get } from "@/network/request.js";
export default {
  name: "Double",
  data() {
    return {
      formData: {},
      options: [
        {
          value: "选项1",
          label: "String",
        },
        {
          value: "选项2",
          label: "String",
        },
        {
          value: "选项3",
          label: "String",
        },
        {
          value: "选项4",
          label: "String",
        },
        {
          value: "选项5",
          label: "String",
        },
      ],
      relationship: "",
      newRelation: "",
    };
  },

  components: {
    ObjectForm,
  },

  computed: {},

  methods: {
    receive_A_ObjectData(data) {
      this.formData.objectA = data;
    },
    receive_B_ObjectData(data) {
      this.formData.objectB = data;
    },
    revice_A_attribut(attr) {
      this.formData.objectA.attribute = JSON.stringify(attr);
    },
    revice_B_attribut(attr) {
      this.formData.objectB.attribute = JSON.stringify(attr);
    },
    single() {
      
      this.$router.replace("/index/single")
    },
    double() {
       
      this.$router.replace("/index/double")
    },
    addRelation() {
      let relation = {
        value: this.newRelation,
        label: this.newRelation,
      };
      this.options.push(relation);
    },
    submit() {
      this.formData.relationship = this.relationship;
      // 提交表单数据
      post("/submit", this.formData)
        .then((res) => {
          this.$message.success("提交成功");
        })
        .catch((err) => {
          this.$message.error("提交失败");
        });
    },
  },
};
</script>
<style lang='less' scoped>
.el-select {
  margin-top: 8px;
}
.fixed {
  padding: 12px;
  max-height: 560px;
  overflow: auto;
  position: relative;

  top: 0;
  bottom: 0;
}
.btn-group {
  padding-top: 12px;
  display: flex;
  justify-content: center;
}
</style>