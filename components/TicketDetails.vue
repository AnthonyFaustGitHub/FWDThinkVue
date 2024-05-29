<script>
    import { reactive, watch, ref } from 'vue'
    import { ticketData } from '../data/ticketData'
    import { ticketDataForm } from '../stores/ticket-details.js'

export default {
  data() {
    return { 
        count: 0,
        ticketDataForm,
        ...ticketData
    };
  },
  methods: {
    clearTypes() {
        this.ticketDataForm.type = [];
    },
    clearForm() {
        this.ticketDataForm.category = '';
        this.ticketDataForm.subject = '';
        this.ticketDataForm.description = '';
        this.ticketDataForm.type = [];
        this.ticketDataForm.attachedFiles = [];
    },
    attachFile() {
        this.count++;
        this.ticketDataForm.attachedFiles.push("nameoffileattached" + this.count);
    },
    createTicket() {
        this.$router.push("/ticketdetailssummary");
    },
    deleteTicketFile(fileToBeDeleted) {
        const listOfTicketFiles = this.ticketDataForm.attachedFiles;        
        this.ticketDataForm.attachedFiles = listOfTicketFiles.filter(function (ticketFile) {
            return ticketFile !== fileToBeDeleted;
        });       
    }
  }
}
</script>
<template>
  
<form>
<div class="row">
    <h5 class="pb-2"><strong>Ticket Details</strong></h5>
</div>

<div class="row wrapper">

    <div class="col-sm-12 col-md-5">
    
        <div class="col-sm-12 mb-3">
            <label for="Category">Category</label>
            <select @change="clearTypes" v-model="ticketDataForm.category" class="form-select" id="Category" name="Category" aria-label="Category">
            <option
            v-for="(category, i) in categories"
            :value="category['category']"
            :key="i">
                {{ category['category'] }}
            </option>
            </select>
        </div>

        <div class="col-sm-12 mb-3">
            <label for="Subject" class="form-label">Subject</label>
            <input v-model="ticketDataForm.subject" type="input" class="form-control" id="Subject" name="Subject" placeholder="Enter subject">
        </div>
        
        <div class="col-sm-12">
            <label for="Description" class="form-label">Description</label>
            <input v-model="ticketDataForm.description" type="input" class="form-control" id="Description" name="Description" placeholder="Enter description">
        </div>

        <div class="col-sm-12 pb-2 pt-5">
            <h6><strong>Ticket Files &amp; Documents</strong></h6>
        </div>

        <div class="d-block pb-2" v-for="(type, i) in ticketDataForm.attachedFiles"> 
            <div class="d-inline-block pe-2">
                {{ type }}
            </div>
            <div class="d-inline-block">
                <i @click.stop.prevent="deleteTicketFile(type)" class="gg-trash"></i>
            </div>
        </div>  

        <div class="col-sm-12">
            <button @click.stop.prevent="attachFile" class="btn btn-primary">Attach File</button>
        </div>  

    </div>

    <div class="col-sm-12 col-md-4">

    <p class="mb-0">Type</p>

        <span v-for="(subtype, i) in types" class="mt-2 d-block ps-2" v-if="ticketDataForm.category === 'Hardware'">
            <span v-if="subtype.category === 'Hardware'">           
                <span class="d-block pb-1" v-for="(type, i) in subtype.types"> 
                    <input type="checkbox" :value="type.type" name="Type" v-model="ticketDataForm.type"> 
                        {{ type.type }}
                    </input>  
                </span>            
            </span>
        </span>

        <span v-for="(subtype, i) in types" class="mt-2 d-block ps-2" v-if="ticketDataForm.category === 'Software'">
            <span v-if="subtype.category === 'Software'">           
                <span class="d-block pb-1" v-for="(type, i) in subtype.types"> 
                    <input type="checkbox" :value="type.type" name="Type" v-model="ticketDataForm.type"> 
                        {{ type.type }}
                    </input>
                </span>            
            </span>
        </span>

        <span v-for="(subtype, i) in types" class="mt-2 d-block ps-2" v-if="ticketDataForm.category === 'Network'">
            <span v-if="subtype.category === 'Network'">           
                <span class="d-block pb-1" v-for="(type, i) in subtype.types"> 
                    <input type="checkbox" :value="type.type" name="Type" v-model="ticketDataForm.type"> 
                        {{ type.type }}
                    </input>  
                </span>            
            </span>
        </span>

        <span v-for="(subtype, i) in types" class="mt-2 d-block ps-2" v-if="ticketDataForm.category === 'In-Processing'">
            <span v-if="subtype.category === 'In-Processing'">           
                <span class="d-block pb-1" v-for="(type, i) in subtype.types"> 
                    <input type="checkbox" :value="type.type" name="Type" v-model="ticketDataForm.type"> 
                        {{ type.type }}
                    </input> 
                </span>            
            </span>
        </span>

    </div>

    <div class="col-sm-12">
        <div class="float-end">
            <button @click.stop.prevent="clearForm" class="btn btn-secondary">Clear</button>
            <button @click.stop.prevent="createTicket" type="submit" class="btn btn-primary ms-1">Create Ticket</button>
        </div>
    </div>
          
</div>
</form>
</template>

<style>
.gg-trash {
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow:
        0 0 0 2px,
        inset -2px 0 0,
        inset 2px 0 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px
}
</style>