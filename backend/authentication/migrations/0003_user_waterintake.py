# Generated by Django 4.0.4 on 2022-05-27 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_age_user_bmi_user_height_user_weight'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='waterintake',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
