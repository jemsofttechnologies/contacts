from django.contrib import admin
from .models import Contact

# Register your models here.


class ContactAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'country_code',
                    'phone_number', 'is_favorite')
    list_filter = ('country_code','created_at','updated_at')
    ordering = ['created_at']
    search_fields = ['first_name','last_name','country_code', 'phone_number']


admin.site.register(Contact, ContactAdmin)
