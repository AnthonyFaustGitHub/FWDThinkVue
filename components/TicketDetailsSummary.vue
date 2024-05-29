<script>
    import { ticketDataForm } from '../stores/ticket-details.js'
       
    export default {
      data() {
        return { 
            ticketDataForm
        };
      },
      methods: {
        createTicket() {
            this.ticketDataForm.category = '';
            this.ticketDataForm.subject = '';
            this.ticketDataForm.description = '';
            this.ticketDataForm.type = [];
            this.ticketDataForm.attachedFiles = [];
            this.$router.push("/");
        }
      }
    }
</script>

<template>

<div class="row">
    <h5 class="pb-2"><strong>Ticket Details Summary</strong></h5>
</div>

<div class="row wrapper">
    
    <div class="col-sm-12 col-md-5">
    
        <p class="mb-0"><strong>Category</strong></p>
        <div class="col-sm-12" v-if="ticketDataForm.category">
            <p>{{ ticketDataForm.category }}</p>
        </div>  
        <div v-else>
            <p>No category selected.</p>
        </div>

        <p class="mb-0"><strong>Subject</strong></p>
        <div class="col-sm-12" v-if="ticketDataForm.subject">
            <p>{{ ticketDataForm.subject }}</p>
        </div>
        <div v-else>
            <p>No subject entered.</p>
        </div>

        <p class="mb-0"><strong>Description</strong></p>
        <div class="col-sm-12" v-if="ticketDataForm.subject">
            <p>{{ ticketDataForm.description }}</p>
        </div>
        <div v-else>
            <p>No description entered.</p>
        </div>

        <div class="col-sm-12 pb-0 pt-5">
            <h6><strong>Ticket Files &amp; Documents</strong></h6>
        </div>

        <div class="col-sm-12 col-md-6">
            <div v-if="ticketDataForm.attachedFiles.length > 0">
                <ul class="ms-3 d-block ps-2" >
                    <li v-for="(attachedFile, i) in ticketDataForm.attachedFiles" >{{ attachedFile }}</li>
                </ul> 
            </div>
            <div v-else>
                <p>No attached files.</p>
            </div>
        </div>

    </div>
              
    <div class="col-sm-12 col-md-4">  
        <p class="mb-0"><strong>Types</strong></p> 
        <div v-if="ticketDataForm.type.length > 0">
            <ul class="mt-2 ms-3 d-block ps-2">
                <li v-for="(type, i) in ticketDataForm.type" >{{ type }}</li>
            </ul> 
        </div>
        <div v-else>
            <p>No types selected.</p>
        </div>
    </div>
        
    <div class="col-sm-12">
        <div class="float-end">
            <button @click="createTicket" class="btn btn-primary ms-1">Create Another Ticket</button>
        </div>
    </div>
        
</div>

</template>

<style scoped>
    ul { list-style: circle; }
</style>