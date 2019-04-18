import {additem,getitem,subject,getQuestionsType,getuser,questions,condition,update,addtype} from '@/api/exam.js'
const state={
    examType:[],
    subject:[],
    getQuestionsType:[],
    getuser:[],
    questions:[]
}
const mutations={
    // 获取考试类型
    getstyle(state,payload){
        state.examType = payload;
    },
    //获取所有课程
    itemsub(state,payload){
        state.subject = payload;
    },
    //获取所有试题
    getQuestionsTypes(state,payload){
        state.getQuestionsType = payload;
    },
    //获取当前用户信息
    getusers(state,payload){
        state.getuser = payload;
    },
    //获取所有试题   //条件查询
    questions(state,payload){
        state.questions = payload;
    }
}
const actions={
    //添加试题
    async additems({commit},payload){
      let result=await additem(payload);
    },
    //获取考试类型
    async getitems({commit},payload){
        let result = await getitem();
        commit('getstyle',result.data)
    },
    //获取所有课程
    async subjects({commit},payload){
        let result = await subject();
        commit('itemsub',result.data)
    },
    //获取所有试题
    async getQuestionsType({commit},payload){
        let result = await getQuestionsType();
        console.log(result,'result')
        commit('getQuestionsTypes',result.data)
    },
    //获取当前用户信息
    async getuser({commit},payload){
        let result = await getuser();
        commit('getusers',result.data)
    },
    //获取所有试题
    async questions({commit},payload){
        let result = await questions();
        commit('questions',result.data)
    },
    //条件查询
    async condition({commit},payload){
        console.log(payload,'condition')
        let result = await condition(payload);
        console.log(result,'conditions')
        commit('questions',result.data)
    },
    //更新试题
    async update({commit},payload){
        let result = await update(payload);
    },
    //添加试题类型
    async addtype({commit},payload){
        console.log(payload,'addtypeddddddddddddddddddddddd')
        let result = await addtype(payload);
        console.log(result,'addtypessssssssssssssssssss')
    }

    //测试删除接口
    // async delete({commit},payload){
    //     console.log(payload,'dels')
    //     let result = await deletes(payload)
    //     console.log(result,'del')
    // }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}
