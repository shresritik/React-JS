# Generated by Django 3.2.9 on 2021-11-15 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20211114_1822'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='isDelivered',
            field=models.BooleanField(default=False),
        ),
    ]