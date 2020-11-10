public with sharing class BuscaController {
    @AuraEnabled
    public static List<Contact> getContacts( Decimal  CPF) {
   return [Select Id, FirstName, LastName, Email, Phone, CPF__c From Contact Where CPF__c = :CPF];
    }

}