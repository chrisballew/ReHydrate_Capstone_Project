# Generated by Django 4.0.4 on 2022-05-24 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rehydrate', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goal',
            name='completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='goal',
            name='due_date',
            field=models.DateField(),
        ),
    ]
