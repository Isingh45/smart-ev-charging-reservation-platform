import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Reservations')

def lambda_handler(event, context):

    try:

        # Handle API Gateway requests
        if 'body' in event:
            body = json.loads(event['body'])

        # Handle Lambda test events
        else:
            body = event

        reservation_id = str(uuid.uuid4())

        table.put_item(
            Item={
                'ReservationID': reservation_id,
                'Name': body.get('name', ''),
                'Vehicle': body.get('vehicle', ''),
                'Station': body.get('station', ''),
                'TimeSlot': body.get('timeSlot', ''),
                'CreatedAt': body.get('createdAt', '')
            }
        )

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*'
            },
            'body': json.dumps({
                'message': 'Reservation saved successfully',
                'reservationId': reservation_id
            })
        }

    except Exception as e:

        return {
            'statusCode': 500,
            'body': json.dumps({
                'error': str(e)
            })
        }