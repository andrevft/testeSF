({
    myAction : function(component, event, helper) {
        component.set("v.Columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"CPF", fieldName:"CPF__c", type:"number"}
        ]);

        var action = component.get("c.getContacts");
        action.setParams({
            recordId: component.get("v.recordId"),
            CPF: component.get("v.lead.CPF__c"),
            CNPJ: component.get("v.lead.CNPJ__c"),
           
        });

        action.setCallback(this, function(data) {
            component.set("v.Contacts", data.getReturnValue());
        });
        
        $A.enqueueAction(action);
    }
})
